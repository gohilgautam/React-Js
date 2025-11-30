import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaHeart, FaComment, FaUser } from 'react-icons/fa';

interface ImageCardProps {
    image: any;
}

const ImageCard: React.FC<ImageCardProps> = ({ image }) => {
    return (
        <motion.div
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="relative group mb-4 break-inside-avoid rounded-lg overflow-hidden cursor-pointer"
        >
            <Link to={`/photo/${image.id}`}>
                <img
                    src={image.webformatURL}
                    alt={image.tags}
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                    <div className="flex justify-between items-center text-white">
                        <div className="flex items-center gap-2">
                            {image.userImageURL ? (
                                <img src={image.userImageURL} alt={image.user} className="w-8 h-8 rounded-full border border-white/50" />
                            ) : (
                                <div className="w-8 h-8 rounded-full bg-gray-500 flex items-center justify-center border border-white/50">
                                    <FaUser className="text-xs" />
                                </div>
                            )}
                            <span className="text-sm font-medium hover:underline">{image.user}</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm">
                            <span className="flex items-center gap-1"><FaHeart /> {image.likes}</span>
                            <span className="flex items-center gap-1"><FaComment /> {image.comments}</span>
                        </div>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
};

export default ImageCard;