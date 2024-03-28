

export default function Game() {
  return (
    <>
      <h1 className="text-center">Tic Tac Toe</h1>
      <div className="max-w-23 mx-auto p-2 d-flex justify-center items-center">
        <div className="text-center text-2xl tracking-normal">
          <p>xTurn</p>
        </div>
        <div className="grid grid-cols-3 gap-5">
          {[...Array(9)].map((v, idx) => {
            return (
              <div

                key={idx}
                className="bg-square rounded-lg shadow-square text-center text-6xl leading-loose w-28 h-28 cursor-pointer">
                X
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
