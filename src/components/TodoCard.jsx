import TodoItem from "./TodoItem";

export default function TodoCard() {
  return (
    <>
      <div className=" mt-5 card lg:w-96 bg-neutral-content text-primary-content">
        <div className="card-body p-0">
          <h2 className="card-title">Card title!</h2>
          <div className="text-wrap">
            <table className="table w-full">
              <tbody>
                  <TodoItem />
                  <TodoItem />
                  <TodoItem />
                  <TodoItem />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
