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
    "Class 1",
    "Class 2",
    "Class 3",
    "Class 4",
    "Class 5",
    "Class 6",
    "Class 7",
    "Class 8",
    "Class 9",
    "Class 10",
    "Class 11",
    "Class 12",
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
      Fname: Fname,
      Lname : Lname,
      age : age,
      gender,
      stdClass : stdClass,
      hobbies : hobbies,
      phone : phone,
      address : address,
      division : division,
    };

    console.log(student);
    alert("Form submitted successfully!");

    props.setShowForm(!props.showForm);
  };

  if (props.showForm) {
    return (
      <div className="flex items-center justify-center bg-gradient-to-r from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 p-6">
        <div className="w-full max-w-2xl bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6 text-center">
            Student Registration
          </h2>

          <form className="space-y-5" onSubmit={studentSubmitForm}>
            {/* First Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
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
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
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
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
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
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
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
                    />
                    {g}
                  </label>
                ))}
              </div>
            </div>

            {/* Class */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
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

            {/* Hobbies */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
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
                    />
                    {hobby}
                  </label>
                ))}
              </div>
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
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
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
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

            {/* Division */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
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
            
            {/* Submit */}
            <button
              type="submit"
              className="w-full py-3 text-white bg-indigo-800 hover:bg-indigo-700 rounded-lg font-medium shadow-md transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  } else {
    // Table view after form submit
    return (
      <div className="m-8">
        <div className="overflow-x-auto shadow-xl rounded-2xl border border-gray-200">
          <table className="w-full text-sm text-left text-gray-600">
            <thead className="bg-gradient-to-r from-indigo-500 to-purple-900 text-white text-xs uppercase">
              <tr>
                <th className="px-6 py-4">First Name</th>
                <th className="px-6 py-4">Last Name</th>
                <th className="px-6 py-4">Age</th>
                <th className="px-6 py-4">Gender</th>
                <th className="px-6 py-4">Class</th>
                <th className="px-6 py-4">Division</th>
                <th className="px-6 py-4">Phone</th>
                <th className="px-6 py-4">Hobbies</th>
                <th className="px-6 py-4">Address</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
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
