import AuthProvider from './Context/AuthProvider';
import User from './Component/User';
function App() {
  return (
    <div>
      <AuthProvider>
        <h2>Context API intro</h2>
        <User></User>
      </AuthProvider>
    </div>

  );
}
export default App;
