import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
// import {serverUrl} from "../src/App"
// import axios from 'axios'
import {useDispatch} from "react-redux"
import api, { setAccessToken } from "../src/api/axios.js";


// shadcn/ui components (relative imports)
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { ClipLoader } from "react-spinners";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { toast, ToastContainer } from "react-toastify";
import { setUserData } from "../redux/userSlice";

const SignInPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading ,setLoading] = useState(false);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const handleSubmit = async(e) => {
    try {
      setLoading(true);
      e.preventDefault();
      const res =await api.post(`/api/auth/signin`,{
        email,password
      })
      setAccessToken(res.data.accessToken)
      dispatch(setUserData(res.data.user));
      setLoading(false)
      if(res?.data?.user?.role == 'admin'){
        navigate("/admin");
      }
      navigate("/");
      toast.success(res.data.message)
      
      console.log(res);
      
    } catch (error) {

      setLoading(false)
      toast.error(
      error.response?.data?.message || "Something went wrong"
       )
      console.log(error);
      
    }
  };


  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-amber-300 via-orange-200 to-amber-400 p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">
            Welcome back
          </CardTitle>
          <CardDescription className="text-center">
            Sign in to your Task Manager account
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="john@example.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </button>
              </div>
            </div>

            <Button type="submit" className="w-full" >
             {loading == true?<ClipLoader size={20} color={'white'} />:`Sign In`}
            </Button>
          </form>
        </CardContent>

        <CardFooter className="flex flex-col space-y-4">
          <div className="text-sm text-muted-foreground text-center">
            Don&apos;t have an account?{" "}
            <Link
              to="/signup"
              className="text-primary hover:underline font-medium"
            >
              Sign up
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default SignInPage;
