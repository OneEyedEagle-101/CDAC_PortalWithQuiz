import "./App.css";
import Login from "./Components/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import StudentDashboard from "./Components/Student/StudentDashboard";
import FacultyDashboard from "./Components/Faculty/FacultyDashboard";
import AdminDashboard from "./Components/Admin/AdminDashboard";
import ForgotPassword from "./Components/ForgotPassword";
import Register from "./Components/Register";
import QuizList, {
  NoticeB,
  RecordingsView,
} from "./Components/Student/QuizList";
import {
  Quiz,
  Profileinfo,
  StudyMaterial,
} from "./Components/Student/QuizList";
import CreateQuiz, {
  SendNotice,
  SendRecording,
} from "./Components/Faculty/Faculty";
import { AddQuestions, AddNotes } from "./Components/Faculty/Faculty";

function App() {
  return (
    <Routes>
      <Route element={<Login />} path="/"></Route>
      <Route element={<StudentDashboard />} path="/Student" />
      <Route element={<FacultyDashboard />} path="/Faculty" />
      <Route element={<AdminDashboard />} path="/Admin" />
      <Route element={<ForgotPassword />} path="/ForgetPassword" />
      <Route element={<AddQuestions />} path="/Faculty/AddQuestion" />
      <Route element={<CreateQuiz />} path="Faculty/CreateQuiz" />
      <Route element={<Register />} path="/Register" />
      <Route element={<QuizList />} path="/Student/QuizList" />
      <Route element={<Quiz />} path="/Student/Quiz" />
      <Route element={<Profileinfo />} path="/Student/Profile" />
      <Route element={<SendNotice />} path="/Faculty/Notice" />
      <Route element={<SendRecording />} path="/Faculty/UploadRecording" />
      <Route element={<NoticeB />} path="/Student/Notice" />
      <Route element={<StudyMaterial />} path="/Student/StudyMaterial" />
      <Route element={<RecordingsView />} path="/Student/viewRecordings" />
    </Routes>
  );
}

export default App;
