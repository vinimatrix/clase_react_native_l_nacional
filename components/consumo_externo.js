import React, { useState, useEffect } from 'react';

export default function MiComponente (){
  const [datos, setDatos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Esta función se ejecuta cuando el componente se monta
    async function obtenerDatos() {
      try {
        setLoading(true);
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const posts = await response.json();
        setDatos(posts);
      } catch (error) {
        console.error('Error al obtener datos:', error);
      } finally {
        setLoading(false);
      }
    };

    obtenerDatos();
  }, []); // Array vacío = se ejecuta solo una vez

  return (
    // JSX del componente
  );
};