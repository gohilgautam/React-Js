import React from 'react';

const Screenloader: React.FC = () => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-gray-900">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-green-500 border-green-200"></div>
        </div>
    );
};

export default Screenloader;
