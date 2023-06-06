import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router";
import userContext from "../context/userContext";

const Register = () => {
  const [error, setError] = useState();
  const form = useForm({
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  const { userId, setUserId } = useContext(userContext);
  //   console.log(userI);

  const navigate = useNavigate();
  const { register, handleSubmit, formState } = form;

  const { errors } = formState;

  const onSubmit = async (data) => {
    console.log({ data });
    try {
      const result = await axios.post("https://reqres.in/api/register", {
        email: data.email,
        password: data.password,
      });
      setError(undefined);

      setUserId(result.data.id);
      navigate("/tasks");
      //   const { data } = result;
      //   console.log(data.id);
    } catch (error) {
      console.log(error.response.data.error);
      setError(error.response.data.error);
    }

    // console.log({ result });
    // console.log({ data });
  };

  return (
    <div className="flex flex-col h-[100vh] w-full justify-center items-center">
      <h2 className="text-2xl font-semibold my-3">Register to continue</h2>
      <form
        className=" grid grid-rows-3 justify-center border-2 border-black rounded-lg p-6"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <div>
          <label className="sr-only" htmlFor="username">
            username
          </label>
          <input
            className="border-2 p-2 border-black rounded-full w-[200px]"
            type="text"
            placeholder="Username"
            id="username"
            {...register("username", {
              required: {
                value: true,
                message: "Username is required",
              },
            })}
          />
          {errors.username && (
            <p className="text-red-500 font-semibold ">
              {errors.username.message}
            </p>
          )}
        </div>
        <div>
          <label className="sr-only" htmlFor="email">
            email
          </label>
          <input
            className="border-2 p-2 border-black rounded-full w-[200px]"
            type="text"
            placeholder="Email Address"
            id="email"
            {...register("email", {
              required: {
                value: true,
                message: "Email is required",
              },
              pattern: {
                value: /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/,
                message: "Invalid email format",
              },
            })}
          />
          {errors.email ? (
            <p className="text-red-500 font-semibold ">
              {errors.email.message}{" "}
            </p>
          ) : (
            <p className=" p-3 text-emerald-400"></p>
          )}
        </div>

        <div>
          <label className="sr-only" htmlFor="password">
            password
          </label>
          <input
            className="border-2 p-2 border-black rounded-full w-[200px]"
            type="password"
            placeholder="Password"
            id="password"
            {...register("password", {
              required: {
                value: true,
                message: "Password is required",
              },
            })}
          />
          {errors.password ? (
            <p className="text-red-500 font-semibold ">
              {errors.password.message}{" "}
            </p>
          ) : (
            <p className=" p-3 text-emerald-400"></p>
          )}
        </div>
        <div className="flex justify-center items-center">
          <button type="submit" className="rounded-md p-1 border-2 border-teal">
            Submit
          </button>
        </div>
      </form>
      {error && (
        <p className="text-red-500 text-xl font-medium uppercase">{error}</p>
      )}
    </div>
  );
};

export default Register;
