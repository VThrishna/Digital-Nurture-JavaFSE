import { CalculateScore } from './components/CalculateScore';

function App() {
  return (
    <div>
      <CalculateScore
        Name={"Thrishna"}
        School={"DNV Public School"}
        total={300}
        goal={3}
      />
    </div>
  );
}

export default App;