import "./index.css";


function App() {

  const std = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    
    <div className="background-overlay min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-300 dark:from-gray-900 dark:to-gray-700">      
      <form className="max-w-xl w-full bg-white dark:bg-gray-800 p-8 rounded-lg shadow-m">
        {/* First Name */}
        <div className="relative z-0 w-full mb-5 group">
          <input type="text" name="first_name" id="first_name" placeholder=" " required
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 focus:outline-none focus:ring-0 focus:border-blue-600 peer transition-all duration-300 ease-in-out" />
          <label htmlFor="first_name" className="transition-all duration-300 ease-in-out peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 transform scale-75 -translate-y-6 top-3 -z-10 origin-[0] peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">First name</label>
        </div>

        {/* Last Name */}
        <div className="relative z-0 w-full mb-5 group">
          <input type="text" name="last_name" id="last_name" placeholder=" " required
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 focus:outline-none focus:ring-0 focus:border-blue-600 peer transition-all duration-300 ease-in-out" />
          <label htmlFor="last_name" className="transition-all duration-300 ease-in-out peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 transform scale-75 -translate-y-6 top-3 -z-10 origin-[0] peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">Last name</label>
        </div>

        {/* Age */}
        <div className="relative z-0 w-full mb-5 group">
          <input type="number" name="age" id="age" placeholder=" " required
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 focus:outline-none focus:ring-0 focus:border-blue-600 peer transition-all duration-300 ease-in-out" />
          <label htmlFor="age" className="transition-all duration-300 ease-in-out peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 transform scale-75 -translate-y-6 top-3 -z-10 origin-[0] peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">Age</label>
        </div>

        {/* Gender */}
        <div className="mb-5">
          <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">Gender</p>
          <div className="flex items-center gap-4">
            <label className="inline-flex items-center">
              <input type="radio" name="gender" value="male" required className="text-blue-600 focus:ring-blue-500 dark:focus:ring-blue-600" />
              <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">Male</span>
            </label>
            <label className="inline-flex items-center">
              <input type="radio" name="gender" value="female" required className="text-blue-600 focus:ring-blue-500 dark:focus:ring-blue-600" />
              <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">Female</span>
            </label>
            <label className="inline-flex items-center">
              <input type="radio" name="gender" value="other" required className="text-blue-600 focus:ring-blue-500 dark:focus:ring-blue-600" />
              <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">Other</span>
            </label>
          </div>
        </div>
        {/* Class Dropdown */}

        <div className="relative z-0 w-full mb-5 group">
          <select
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 focus:outline-none focus:ring-0 focus:border-blue-600 peer transition-all duration-300 ease-in-out"
          >
            <option value="" disabled hidden></option>

            {std.map((s) => <option value="class1">{s}</option>
            )}
          </select>
          <label
            htmlFor="class"
            className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500
      peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100
      peer-valid:scale-75 peer-valid:-translate-y-6"
          >
            Class
          </label>
        </div>

        {/* Hobby */}
        <div className="mb-5">
          <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">Hobbies</p>
          <div className="flex flex-wrap gap-4">
            <label className="inline-flex items-center">
              <input type="checkbox" name="hobbies" value="reading" className="text-blue-600 focus:ring-blue-500 dark:focus:ring-blue-600" />
              <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">Reading</span>
            </label>
            <label className="inline-flex items-center">
              <input type="checkbox" name="hobbies" value="traveling" className="text-blue-600 focus:ring-blue-500 dark:focus:ring-blue-600" />
              <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">Traveling</span>
            </label>
            <label className="inline-flex items-center">
              <input type="checkbox" name="hobbies" value="gaming" className="text-blue-600 focus:ring-blue-500 dark:focus:ring-blue-600" />
              <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">Gaming</span>
            </label>
            <label className="inline-flex items-center">
              <input type="checkbox" name="hobbies" value="music" className="text-blue-600 focus:ring-blue-500 dark:focus:ring-blue-600" />
              <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">Music</span>
            </label>
          </div>
        </div>

        {/* Phone Number */}
        <div className="relative z-0 w-full mb-5 group">
          <input type="tel" name="phone" id="phone" placeholder=" " pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 focus:outline-none focus:ring-0 focus:border-blue-600 peer transition-all duration-300 ease-in-out" />
          <label htmlFor="phone" className="transition-all duration-300 ease-in-out peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 transform scale-75 -translate-y-6 top-3 -z-10 origin-[0] peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">Phone number (123-456-7890)</label>
        </div>

        {/* Address */}
        <div className="relative z-0 w-full mb-5 group">
          <textarea name="address" id="address" placeholder=" " required
            className="block px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 py-2.5 border-gray-300 appearance-none dark:text-white dark:border-gray-600 focus:outline-none focus:ring-0 focus:border-blue-600 peer transition-all duration-300 ease-in-out resize-none"></textarea>
          <label htmlFor="address" className="transition-all duration-300 ease-in-out peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 transform scale-75 -translate-y-6 top-3 -z-10 origin-[0] peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">Address</label>
        </div>
        {/* Division */}
        <div className="relative z-0 w-full mb-5 group">
          <input type="text" name="division" id="division" placeholder=" " required
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 focus:outline-none focus:ring-0 focus:border-blue-600 peer transition-all duration-300 ease-in-out" />
          <label htmlFor="division" className="transition-all duration-300 ease-in-out peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 transform scale-75 -translate-y-6 top-3 -z-10 origin-[0] peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">Division</label>
        </div>

        {/* Image Upload */}
        <div className="mb-5">
          <label htmlFor="image" className="block mb-2 text-sm font-medium text-gray-500 dark:text-gray-400">Upload image</label>
          <input type="file" id="image" name="image" accept="image/*" required
            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-white dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 transition-all duration-300 ease-in-out" />
        </div>

        {/* Submit Button */}
        <button type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 transition-all duration-300 ease-in-out">
          Submit
        </button>
      </form>


    </div>
  )
}

export default App
