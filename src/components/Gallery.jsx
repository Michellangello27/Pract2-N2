import React from 'react';

export default function Gallery({ photos = [] }) {
  if (!Array.isArray(photos)) {
    return (
      <p className="text-center text-red-500">
        No se recibieron imágenes en el formato esperado.
      </p>
    );
  }

  if (photos.length === 0) {
    return (
      <p className="text-center text-slate-500">
        No se encontraron imágenes para esta búsqueda.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
      {photos.map((photo) => {
        const { farm, server, id, secret, title } = photo;
        const photoUrl = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_m.jpg`;

        return (
          <img
            key={id}
            src={photoUrl}
            alt={title}
            className="w-full h-full object-cover rounded"
          />
        );
      })}
    </div>
  );
}
