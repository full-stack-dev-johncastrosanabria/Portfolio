import { useEffect, useMemo, useState } from 'react';
import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import { db, isFirebaseConfigured } from '@/lib/firebase';
import { mockPosts } from '@/data/posts';

function normalizePost(docOrObject, source = 'local') {
  if ('data' in docOrObject) {
    const data = docOrObject.data();
    return {
      id: docOrObject.id,
      slug: data.slug,
      title: data.title,
      excerpt: data.excerpt,
      content: data.content,
      tags: data.tags ?? [],
      publishedAt: data.publishedAt ?? new Date().toISOString(),
      readingTime: data.readingTime ?? '4 min',
      source,
    };
  }

  return {
    ...docOrObject,
    source,
  };
}

export function useBlogPosts() {
  const [posts, setPosts] = useState(mockPosts.map((post) => normalizePost(post)));
  const [isLoading, setIsLoading] = useState(isFirebaseConfigured);
  const [error, setError] = useState('');

  useEffect(() => {
    async function loadPosts() {
      if (!isFirebaseConfigured || !db) {
        setIsLoading(false);
        return;
      }

      try {
        const postsRef = collection(db, 'posts');
        const snapshot = await getDocs(query(postsRef, orderBy('publishedAt', 'desc')));
        if (!snapshot.empty) {
          setPosts(snapshot.docs.map((doc) => normalizePost(doc, 'firebase')));
        }
      } catch (firebaseError) {
        console.warn('No se pudieron cargar los posts desde Firebase. Se usarán los locales.', firebaseError);
        setError('No se pudo conectar con Firebase. Se cargaron artículos locales.');
      } finally {
        setIsLoading(false);
      }
    }

    loadPosts();
  }, []);

  const sortedPosts = useMemo(
    () =>
      [...posts].sort(
        (current, next) => new Date(next.publishedAt).getTime() - new Date(current.publishedAt).getTime(),
      ),
    [posts],
  );

  return {
    posts: sortedPosts,
    isLoading,
    error,
  };
}
