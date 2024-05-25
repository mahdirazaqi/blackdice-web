"use client";

import { client } from "@/lib/apollo/client";
import { SendCodeMutation, VerifyCodeMutation } from "@/lib/gql/auth";
import { Formik } from "formik";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Auth() {
  const router = useRouter();

  const [step, setStep] = useState(1);
  const [region, setRegion] = useState("IR");
  const [phone, setPhone] = useState("");
  const [code, setCode] = useState("");

  return (
    <>
      {step === 1 && (
        <Formik
          initialValues={{ phone: "" }}
          onSubmit={(values) => {
            setPhone(values.phone);

            client.mutate({
              mutation: SendCodeMutation,
              variables: {
                input: {
                  region: region,
                  phone: values.phone,
                },
              },
            });

            setStep(2);
          }}
        >
          {({ values, handleChange, handleSubmit }) => (
            <form
              onSubmit={handleSubmit}
              className="bg-gray-100 w-full max-w-96 flex flex-col mx-auto p-3 gap-4 rounded-md my-48"
            >
              <h3 className="text-lg font-bold mb-3">ورود به حساب کاربری</h3>

              <label htmlFor="phone_number" className="text-xs -mb-2">
                شماره موبایل
              </label>

              <input
                type="text"
                name="phone"
                placeholder="شماره موبایل خود را اینجا وارد کنید"
                onChange={handleChange}
                value={values.phone}
                className="p-3 rounded-md"
              />

              <button
                type="submit"
                className="bg-primary p-3 rounded-md text-white"
              >
                ارسال کد
              </button>
            </form>
          )}
        </Formik>
      )}

      {step === 2 && (
        <Formik
          initialValues={{ code: "" }}
          onSubmit={(values) => {
            client
              .mutate({
                mutation: VerifyCodeMutation,
                variables: {
                  input: {
                    region: region,
                    phone: phone,
                    code: values.code,
                  },
                },
              })
              .then(({ data }) => {
                localStorage.setItem(
                  "currentUser",
                  JSON.stringify({
                    _id: data.verifyCode.user._id,
                    name: data.verifyCode.user.name,
                    token: data.verifyCode.token,
                  })
                );

                router.push("/");
              });
          }}
        >
          {({ values, handleChange, handleSubmit }) => (
            <form
              onSubmit={handleSubmit}
              className="bg-gray-100 w-full max-w-96 flex flex-col mx-auto p-3 gap-4 rounded-md my-48"
            >
              <h3 className="text-lg font-bold mb-3">ورود به حساب کاربری</h3>

              <label htmlFor="phone_number" className="text-xs -mb-2">
                کد ورود
              </label>

              <input
                type="text"
                name="code"
                placeholder="کد ارسال شده را وارد کنید"
                onChange={handleChange}
                value={values.code}
                className="p-3 rounded-md"
              />

              <button
                type="submit"
                className="bg-primary p-3 rounded-md text-white"
              >
                ورود
              </button>
            </form>
          )}
        </Formik>
      )}

      <form className="bg-gray-100 w-full max-w-96 flex flex-col mx-auto p-3 gap-4 rounded-md my-48">
        <h3 className="text-lg font-bold mb-3">ورود به حساب کاربری</h3>

        <label htmlFor="phone_number" className="text-xs -mb-2">
          شماره موبایل
        </label>

        <input
          type="text"
          id="phone_number"
          className="p-3 rounded-md"
          placeholder="شماره موبایل خود را اینجا وارد کنید"
        />

        <button className="bg-primary p-3 rounded-md text-white">ورود</button>
      </form>
    </>
  );
}
