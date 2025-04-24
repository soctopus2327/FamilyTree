export default function Modal({ node, onClose }: { node: any; onClose: () => void }) {
    const { name, life_period, image } = node?.data || {};
  
    //Change fixed modal position
    return (
      <div className="fixed top-20 right-150 z-50">
        <div className="bg-white p-6 rounded-xl shadow-lg w-96 relative border-3 border-gray-400">
          <button onClick={onClose} className="absolute top-2 right-3 text-gray-600 text-xl hover:text-red-500">
            x
          </button>
          <img src={image} alt={name} className="w-24 h-24 rounded-full mx-auto mb-4" />
          <h2 className="font-bold text-center">{name}</h2>
          <p className="text-center text-gray-500">{life_period}</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </div>
    );
  }
  