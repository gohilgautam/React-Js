import React, { useState } from "react";

function StudentForm(props: any) {
  const [Fname, setFname] = useState<string>("");
  const [Lname, setLname] = useState<string>("");
  const [age, setAge] = useState<number | "">("");
  const [gender, setGender] = useState<string>("");
  const [stdClass, setStdClass] = useState<string>("");
  const [hobbies, setHobbies] = useState<string[]>([]);
  const [phone, setPhone] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [division, setDivision] = useState<string>("");

  const AllClasses: string[] = [
    "Class 1", "Class 2", "Class 3", "Class 4", "Class 5",
    "Class 6", "Class 7", "Class 8", "Class 9", "Class 10",
    "Class 11", "Class 12",
  ];
  const AllHobbies = ["Reading", "Traveling", "Gaming", "Music"];

  type StudentObject = {
    Fname: string;
    Lname: string;
    age: number | "";
    gender: string;
    stdClass: string;
    hobbies: string[];
    phone: string;
    address: string;
    division: string;
  };

  const getAllHobbies = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const checked = event.target.checked;
    if (checked) {
      setHobbies((prev) => [...prev, value]);
    } else {
      setHobbies((prev) => prev.filter((h) => h !== value));
    }
  };

  const studentSubmitForm = (event: React.FormEvent) => {
    event.preventDefault();

    const student: StudentObject = {
      Fname,
      Lname,
      age,
      gender,
      stdClass,
      hobbies,
      phone,
      address,
      division,
    };
    console.log(student);

    props.setShowForm(!props.showForm);
  };

  if (props.showForm) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 p-6">
        <div className="w-full max-w-3xl bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-10">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8 text-center">
            🎓 Student Registration
          </h2>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={studentSubmitForm}>
            {/* First Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                First Name
              </label>
              <input
                type="text"
                required
                value={Fname}
                onChange={(e) => setFname(e.target.value)}
                placeholder="John"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white"
              />
            </div>

            {/* Last Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Last Name
              </label>
              <input
                type="text"
                required
                value={Lname}
                onChange={(e) => setLname(e.target.value)}
                placeholder="Doe"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white"
              />
            </div>

            {/* Age */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Age
              </label>
              <input
                type="number"
                required
                value={age}
                onChange={(e) => setAge(Number(e.target.value))}
                placeholder="18"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white"
              />
            </div>

            {/* Gender */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Gender
              </label>
              <div className="flex gap-6">
                {["Male", "Female", "Other"].map((g) => (
                  <label key={g} className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="gender"
                      value={g}
                      checked={gender === g}
                      onChange={(e) => setGender(e.target.value)}
                      className="text-indigo-600"
                    />
                    {g}
                  </label>
                ))}
              </div>
            </div>

            {/* Class */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Class
              </label>
              <select
                value={stdClass}
                onChange={(e) => setStdClass(e.target.value)}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white"
              >
                <option value="">Select Class</option>
                {AllClasses.map((cls, index) => (
                  <option key={index}>{cls}</option>
                ))}
              </select>
            </div>

            {/* Division */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Division
              </label>
              <input
                type="text"
                required
                value={division}
                onChange={(e) => setDivision(e.target.value)}
                placeholder="A / B / C"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="123-456-7890"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white"
              />
            </div>

            {/* Address */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Address
              </label>
              <textarea
                required
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Your Address"
                className="w-full p-3 border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white"
              />
            </div>

            {/* Hobbies */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Hobbies
              </label>
              <div className="flex gap-6 flex-wrap">
                {AllHobbies.map((hobby, index) => (
                  <label key={index} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      value={hobby}
                      onChange={getAllHobbies}
                      checked={hobbies.includes(hobby)}
                      className="text-indigo-600"
                    />
                    {hobby}
                  </label>
                ))}
              </div>
            </div>

            {/* Submit */}
            <div className="md:col-span-2">
              <button
                type="submit"
                className="w-full py-3 text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 rounded-lg font-semibold shadow-lg transition"
              >
                🚀 Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  } else {
    // Table view after form submit
    return (
      <div className="m-8">
        <div className="overflow-x-auto shadow-2xl rounded-2xl border border-gray-200">
          <table className="w-full text-sm text-left text-gray-700">
            <thead className="bg-gradient-to-r from-indigo-600 to-purple-800 text-white text-sm uppercase">
              <tr>
                {[
                  "First Name","Last Name","Age","Gender","Class",
                  "Division","Phone","Hobbies","Address",
                ].map((head, index) => (
                  <th key={index} className="px-6 py-4">{head}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white dark:bg-gray-800 dark:text-white">
              <tr className="hover:bg-gray-50 dark:hover:bg-gray-700 transition">
                <td className="px-6 py-4">{Fname}</td>
                <td className="px-6 py-4">{Lname}</td>
                <td className="px-6 py-4">{age}</td>
                <td className="px-6 py-4">{gender}</td>
                <td className="px-6 py-4">{stdClass}</td>
                <td className="px-6 py-4">{division}</td>
                <td className="px-6 py-4">{phone}</td>
                <td className="px-6 py-4">{hobbies.join(" | ")}</td>
                <td className="px-6 py-4">{address}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default StudentForm;
