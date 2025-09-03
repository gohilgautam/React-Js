import { useState } from "react";

function StudentForm() {
  const [FirstName, setFirstName] = useState<string>("");
  const [LastName, setLastName] = useState<string>("");
  const [Age, setAge] = useState<string>("");
  const [Gender, setGender] = useState<string>("");
  const [Phone, setPhone] = useState<string>("");
  const [Email, setEmail] = useState<string>("");
  const [Course, setCourse] = useState<string>("");
  const [Address, setAddress] = useState<string>("");

  const [studentList, setStudentList] = useState<studentObject[]>([]);

  const allCourses: string[] = [
    "Science",
    "Commerce",
    "Arts",
    "Engineering",
    "Medical",
  ];

  type studentObject = {
    FirstName: string;
    LastName: string;
    Age: string;
    Gender: string;
    Phone: string;
    Email: string;
    Course: string;
    Address: string;
  };

  const submitStudentForm = (event: any) => {
    event.preventDefault();

    const student: studentObject = {
      FirstName,
      LastName,
      Age,
      Gender,
      Phone,
      Email,
      Course,
      Address,
    };

    setStudentList([...studentList, student]);

    // Reset form
    setFirstName("");
    setLastName("");
    setAge("");
    setGender("");
    setPhone("");
    setEmail("");
    setCourse("");
    setAddress("");
  };

  return (
    <div className="flex flex-col items-center py-16 px-6 bg-gradient-to-br from-indigo-100 via-blue-50 to-indigo-200 min-h-screen">
      {/* Form Card */}
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-2xl p-10 border border-indigo-100">
        <h2 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500 mb-10 drop-shadow-md">
          🎓 Student Registration Form
        </h2>
        <form
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          onSubmit={submitStudentForm}
        >
          {/* First Name */}
          <div className="flex flex-col">
            <label className="text-sm font-medium text-white mb-2">
              First Name
            </label>
            <input
              type="text"
              value={FirstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="Enter first name"
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none"
              required
            />
          </div>

          {/* Last Name */}
          <div className="flex flex-col">
            <label className="text-sm font-medium text-white mb-2">
              Last Name
            </label>
            <input
              type="text"
              value={LastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Enter last name"
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none"
              required
            />
          </div>

          {/* Age */}
          <div className="flex flex-col">
            <label className="text-sm font-medium text-white mb-2">
              Age
            </label>
            <input
              type="number"
              value={Age}
              onChange={(e) => setAge(e.target.value)}
              placeholder="Enter age"
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none"
              required
            />
          </div>

          {/* Gender */}
          <div className="flex flex-col">
            <label className="text-sm font-medium text-white mb-2">
              Gender
            </label>
            <div className="flex gap-4">
              {["Male", "Female"].map((g) => (
                <label
                  key={g}
                  className={`flex-1 text-center cursor-pointer rounded-lg border px-4 py-2 transition ${Gender === g
                      ? "bg-indigo-600 text-white"
                      : "bg-gray-50 hover:bg-indigo-50 text-gray-700"
                    }`}
                >
                  <input
                    type="radio"
                    name="gender"
                    value={g}
                    checked={Gender === g}
                    onChange={(e) => setGender(e.target.value)}
                    className="hidden"
                  />
                  {g}
                </label>
              ))}
            </div>
          </div>

          {/* Phone */}
          <div className="flex flex-col">
            <label className="text-sm font-medium text-white mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              value={Phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Enter 10-digit number"
              pattern="[0-9]{10}"
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none"
              required
            />
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label className="text-sm font-medium text-white mb-2">
              Email Address
            </label>
            <input
              type="email"
              value={Email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none"
            />
          </div>

          {/* Course */}
          <div className="md:col-span-2 flex flex-col">
            <label className="text-sm font-medium text-white mb-2">
              Course
            </label>
            <select
              value={Course}
              onChange={(e) => setCourse(e.target.value)}
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none"
              required
            >
              <option value="" disabled>
                Select course
              </option>
              {allCourses.map((course, index) => (
                <option key={index}>{course}</option>
              ))}
            </select>
          </div>

          {/* Address */}
          <div className="md:col-span-2 flex flex-col">
            <label className="text-sm font-medium text-white mb-2">
              Address
            </label>
            <textarea
              value={Address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Enter full address"
              rows={3}
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none"
              required
            />
          </div>

          {/* Submit */}
          <div className="md:col-span-2">
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-indigo-600 to-blue-500 text-white font-semibold py-3 rounded-lg shadow-md hover:scale-[1.02] transition"
            >
              Register Student
            </button>
          </div>
        </form>

      </div>

      {/* Table */}
      <div className="mt-16 w-full max-w-6xl mx-auto">
        <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500 mb-6 text-center">
          📋 Registered Students
        </h3>
        <div className="overflow-x-auto rounded-2xl shadow-xl border border-gray-200">
          <table className="w-full text-sm text-gray-700">
            <thead className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white uppercase text-xs tracking-wider">
              <tr>
                {[
                  "First Name",
                  "Last Name",
                  "Age",
                  "Gender",
                  "Phone",
                  "Email",
                  "Course",
                  "Address",
                ].map((heading, idx) => (
                  <th
                    key={idx}
                    className="px-6 py-4 text-center font-semibold"
                  >
                    {heading}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {studentList.map((student, index) => (
                <tr
                  key={index}
                  className={`transition ${index % 2 === 0 ? "bg-gray-50" : "bg-white"
                    } hover:bg-indigo-50 hover:shadow-md`}
                >
                  <td className="px-6 py-4 text-center">{student.FirstName}</td>
                  <td className="px-6 py-4 text-center">{student.LastName}</td>
                  <td className="px-6 py-4 text-center">{student.Age}</td>
                  <td className="px-6 py-4 text-center">{student.Gender}</td>
                  <td className="px-6 py-4 text-center">{student.Phone}</td>
                  <td className="px-6 py-4 text-center">{student.Email}</td>
                  <td className="px-6 py-4 text-center">{student.Course}</td>
                  <td className="px-6 py-4 text-center">{student.Address}</td>
                </tr>
              ))}
              {studentList.length === 0 && (
                <tr>
                  <td
                    colSpan={8}
                    className="text-center py-6 text-gray-500 italic"
                  >
                    No students registered yet...
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default StudentForm;
