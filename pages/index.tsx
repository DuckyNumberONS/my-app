import type { NextPage } from "next";
import AddTodoForm from "../components/Main/AddTodoForm"
import TodoList from "../components/Main/TodoList"
import TotalCompleteItems from "../components/Main/TotalCompleteItems";
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
const Home: NextPage = () => {
  return (
    <div id="App" className="flex flex-col container max-w-md mx-auto md:pt-8">
      <section>
        <div className="flex flex-col bg-gray-200 rounded shadow-lg">
          <Header />
          <AddTodoForm />
          <TodoList />
          <TotalCompleteItems />
        </div>
        <Footer />
      </section>
    </div>
  );
};
export default Home;
