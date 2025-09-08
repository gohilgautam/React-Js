import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import Swal from "sweetalert2";
import "react-toastify/dist/ReactToastify.css";

function StudentForm() {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [age, setAge] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [course, setCourse] = useState<string>("");
  const [address, setAddress] = useState<string>("");

  const [error, setError] = useState<any>({});
  const [students, setStudents] = useState<Student[]>(
    JSON.parse(localStorage.getItem("students") || "[]")
  );
  const [editId, setEditId] = useState<number>();

  type Student = {
    firstName: string;
    lastName: string;
    age: string;
    gender: string;
    phone: string;
    email: string;
    course: string;
    address: string;
  };

  const allCourses: string[] = [
    "Science",
    "Commerce",
    "Arts",
    "Engineering",
    "Medical",
  ];

  useEffect(() => {
    localStorage.setItem("students", JSON.stringify(students));
  }, [students]);

  const validate = () => {
    const newError: any = {};
    if (!firstName.trim()) newError.firstName = "First Name is required";
    if (!lastName.trim()) newError.lastName = "Last Name is required";
    if (!age.trim()) newError.age = "Age is required";
    else if (parseInt(age) <= 0) newError.age = "Invalid age";
    if (!gender.trim()) newError.gender = "Gender is required";
    if (!phone.trim()) newError.phone = "Phone is required";
    else if (!/^[0-9]{10}$/.test(phone)) newError.phone = "Invalid phone";
    if (!email.trim()) newError.email = "Email is required";
    else if (
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)
    )
      newError.email = "Invalid email";
    if (!course.trim()) newError.course = "Course is required";
    if (!address.trim()) newError.address = "Address is required";

    setError(newError);
    return Object.keys(newError).length;
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (validate() !== 0) return;

    const student: Student = {
      firstName,
      lastName,
      age,
      gender,
      phone,
      email,
      course,
      address,
    };

    if (editId === undefined) {
      setStudents([...students, student]);
      toast.success("Student added successfully!");
    } else {
      const updated = students.map((s, i) =>
        i === editId ? student : s
      );
      setStudents(updated);
      toast.success("Student updated successfully!");
    }

    resetForm();
  };

  const resetForm = () => {
    setFirstName("");
    setLastName("");
    setAge("");
    setGender("");
    setPhone("");
    setEmail("");
    setCourse("");
    setAddress("");
    setEditId(undefined);
  };

  const handleEdit = (i: number) => {
    setEditId(i);
    const s = students[i];
    setFirstName(s.firstName);
    setLastName(s.lastName);
    setAge(s.age);
    setGender(s.gender);
    setPhone(s.phone);
    setEmail(s.email);
    setCourse(s.course);
    setAddress(s.address);
  };

  const handleDelete = (i: number) => {
    Swal.fire({
      title: "⚠️ Are you absolutely sure?",
      text: "Once deleted, this student's record cannot be recovered!",
      icon: "warning",
      iconColor: "#e74c3c",
      showCancelButton: true,
      confirmButtonText: "✅ Yes, delete it!",
      cancelButtonText: "❌ Cancel",
      confirmButtonColor: "#e74c3c",
      cancelButtonColor: "#6c757d",
      background: "#1e293b",
      color: "#f8fafc",
      showClass: {
        popup: "animate__animated animate__zoomIn faster",
      },
      hideClass: {
        popup: "animate__animated animate__zoomOut faster",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        setStudents(students.filter((_, idx) => idx !== i));
        Swal.fire({
          title: "🎉 Deleted Successfully!",
          text: "The student record has been removed.",
          icon: "success",
          confirmButtonColor: "#22c55e",
          background: "#f0fdf4",
          color: "#065f46",
          timer: 2000,
          showConfirmButton: false,
        });
      }
    });
  }


  return (
    <>
      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-7 mt-5">
        <h2 className="text-2xl font-bold text-center text-white">
          {editId !== undefined ? "Update Student" : "Student Registration"}
        </h2>

        {/* Name */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium text-white">
              First Name
            </label>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className={`w-full p-2 border rounded-lg ${error.firstName ? "border-red-500" : "border-gray-300"
                }`}
            />
            {error.firstName && (
              <p className="text-red-400 text-xs">{error.firstName}</p>
            )}
          </div>
          <div>
            <label className="text-sm font-medium text-white">
              Last Name
            </label>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className={`w-full p-2 border rounded-lg ${error.lastName ? "border-red-500" : "border-gray-300"
                }`}
            />
            {error.lastName && (
              <p className="text-red-400 text-xs">{error.lastName}</p>
            )}
          </div>
        </div>

        {/* Age */}
        <div>
          <label className="text-sm font-medium text-white">Age</label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className={`w-full p-2 border rounded-lg ${error.age ? "border-red-500" : "border-gray-300"
              }`}
          />
          {error.age && (
            <p className="text-red-400 text-xs">{error.age}</p>
          )}
        </div>

        {/* Gender */}
        <div>
          <label className="text-sm font-medium text-white">Gender</label>
          <div className="flex gap-4 mt-1 text-white">
            {["Male", "Female"].map((g) => (
              <label key={g} className="flex items-center gap-2">
                <input
                  type="radio"
                  value={g}
                  checked={gender === g}
                  onChange={(e) => setGender(e.target.value)}
                />
                {g}
              </label>
            ))}
          </div>
          {error.gender && (
            <p className="text-red-400 text-xs">{error.gender}</p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label className="text-sm font-medium text-white">Phone</label>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className={`w-full p-2 border rounded-lg ${error.phone ? "border-red-500" : "border-gray-300"
              }`}
          />
          {error.phone && (
            <p className="text-red-400 text-xs">{error.phone}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`w-full p-2 border rounded-lg ${error.email ? "border-red-500" : "border-gray-300"
              }`}
          />
          {error.email && (
            <p className="text-red-400 text-xs">{error.email}</p>
          )}
        </div>

        {/* Course */}
        <div>
          <label className="text-sm font-medium text-white">Course</label>
          <select
            value={course}
            onChange={(e) => setCourse(e.target.value)}
            className={`w-full p-2 border rounded-lg ${error.course ? "border-red-500" : "border-gray-300"
              }`}
          >
            <option value="">Select</option>
            {allCourses.map((c, i) => (
              <option key={i}>{c}</option>
            ))}
          </select>
          {error.course && (
            <p className="text-red-400 text-xs">{error.course}</p>
          )}
        </div>

        {/* Address */}
        <div>
          <label className="text-sm font-medium text-white">Address</label>
          <textarea
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className={`w-full p-2 border rounded-lg ${error.address ? "border-red-500" : "border-gray-300"
              }`}
          />
          {error.address && (
            <p className="text-red-400 text-xs">{error.address}</p>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          className={`w-full py-2 rounded-lg text-white ${editId === undefined
            ? "bg-blue-600 hover:bg-blue-700"
            : "bg-yellow-500 hover:bg-yellow-600"
            }`}
        >
          {editId === undefined ? "Add Student" : "Update Student"}
        </button>
      </form>

      {/* Table */}
      <div className="max-w-6xl mx-auto mt-12">
        <h2 className="text-2xl font-bold text-center mb-6 text-white">
          Students List
        </h2>
        <div className="overflow-x-auto border rounded-xl shadow-lg bg-gray-900 text-white">
          <table className="w-full text-sm">
            <thead className="bg-gray-700 text-white">
              <tr>
                {[
                  "No",
                  "First",
                  "Last",
                  "Age",
                  "Gender",
                  "Phone",
                  "Email",
                  "Course",
                  "Address",
                  "Action",
                ].map((h, i) => (
                  <th key={i} className="px-4 py-2 text-left">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {students.map((s, i) => (
                <tr key={i} className="border-t border-gray-700 hover:bg-gray-800">
                  <td className="px-4 py-2">{i + 1}</td>
                  <td className="px-4 py-2">{s.firstName}</td>
                  <td className="px-4 py-2">{s.lastName}</td>
                  <td className="px-4 py-2">{s.age}</td>
                  <td className="px-4 py-2">{s.gender}</td>
                  <td className="px-4 py-2">{s.phone}</td>
                  <td className="px-4 py-2">{s.email}</td>
                  <td className="px-4 py-2">{s.course}</td>
                  <td className="px-4 py-2">{s.address}</td>
                  <td className="px-4 py-2 flex gap-2">
                    <button
                      onClick={() => handleEdit(i)}
                      className="px-3 py-1 text-xs rounded bg-yellow-400 text-white hover:bg-yellow-500"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(i)}
                      className="px-3 py-1 text-xs rounded bg-red-500 text-white hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
              {students.length === 0 && (
                <tr>
                  <td colSpan={10} className="text-center py-4 text-gray-400">
                    No students yet...
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      <ToastContainer />
    </>
  );
}

export default StudentForm;
