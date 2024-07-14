import LoginButton from "@/components/auth/LoginButton";
import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <main className="flex h-full flex-col items-center justify-center bg-blue-500">
      <div className="space-y-6">
        <h1 className="text-6xl font-semibold text-white drop-shadow-md">
          🔐 Auth
        </h1>
        <p className="text-white text-lg">a simple auth service</p>
        <div>
          <LoginButton>
            <Button variant="secondary" size="lg">
              Sign in
            </Button>
          </LoginButton>
        </div>
      </div>
    </main>
  );
};

export default Home;
