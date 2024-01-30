import "./App.css";
import Button from "./components/Button";
import Navbar from "./components/Navbar";
import TodoCard from "./components/TodoCard";

function App() {
  return (
    <>
      <nav>
        <Navbar />
      </nav>
      <main>
        <section>
          <div className="grid grid-cols-2 sm:gap-20 gap-4 mt-5">
            <Button title="Todo Lists" />

            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            <button
              className="btn btn-outline"
              onClick={() => document.getElementById("my_modal_4").showModal()}
            >
              + Create New Todo
            </button>

            <dialog id="my_modal_4" className="modal">
              <div className="modal-box w-11/12 max-w-5xl">
                <h3 className="font-bold text-lg">Create New Todo List</h3>

                <form className="grid grid-row  mt-5 justify-items-center">
                  <label className="form-control w-full max-w-xs mb-12">
                    <div className="label">
                      <span className="label-text">List Name</span>
                    </div>
                    <input
                      type="text"
                      placeholder="Type here"
                      className="input input-bordered w-full max-w-xs"
                    />
                  </label>
                  <label className="form-control w-full max-w-xs">
                    <div className="label">
                      <span className="label-text">New Todo</span>
                    </div>
                    <input
                      type="text"
                      placeholder="Type here"
                      className="input input-bordered input-primary w-full max-w-xs mb-4"
                    />
                    
                    

                    <div className="flex justify-end">
                      <a href="#" className="hover:text-white">
                        Add Todo
                      </a>
                    </div>
                  </label>
                </form>
                {/* <form className="grid grid-row gap-6 mt-8 justify-items-center">
                  <input
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered input-primary w-full max-w-xs"
                  />
                  <div className="label">
                    <span className="label-text-alt">Bottom Right label</span>
                  </div>
                  
                </form> */}

                <div className="modal-action">
                  <form method="dialog">
                    <button className="btn btn-secondary mr-5">Cancel</button>
                    <button className="btn btn-primary-content">Save</button>
                  </form>
                </div>
              </div>
            </dialog>
          </div>
        </section>

        <section className="grid xl:grid-cols-3 md:grid-cols-2 grid-row gap-4 mt-5">
          <TodoCard />
          <TodoCard />
          <TodoCard />
          <TodoCard />
          <TodoCard />
          <TodoCard />
        </section>
      </main>
    </>
  );
}

export default App;
