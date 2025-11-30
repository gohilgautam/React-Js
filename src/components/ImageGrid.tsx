import React from 'react';
import ImageCard from './ImageCard';

interface ImageGridProps {
    images: any[];
    loading: boolean;
}

const ImageGrid: React.FC<ImageGridProps> = ({ images, loading }) => {
    if (loading && images.length === 0) {
        return (
            <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 p-4">
                {[...Array(8)].map((_, i) => (
                    <div key={i} className="mb-4 bg-gray-200 dark:bg-gray-700 rounded-lg h-64 animate-pulse break-inside-avoid"></div>
                ))}
            </div>
        );
    }

    if (images.length === 0 && !loading) {
        return (
            <div className="text-center py-20 text-gray-500">
                <p className="text-xl">No images found.</p>
            </div>
        );
    }

    return (
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 p-4">
            {images.map((image) => (
                <ImageCard key={image.id} image={image} />
            ))}
        </div>
    );
};

export default ImageGrid;