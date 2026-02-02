// src/app/(auth)/login/page.tsx
"use client";

import { Box, Button, TextField, Stack } from "@mui/material";
import { useForm } from "react-hook-form";
import { api } from "@/lib/api";
import { useRouter } from "next/navigation";

type LoginForm = {
  username: string;
  password: string;
  userType: "Staff" | "Student";
};

export default function LoginPage() {
  const { register, handleSubmit } = useForm<LoginForm>();
  const router = useRouter();

  const onSubmit = async (data: LoginForm) => {
    await api.post("/api/auth/login", data);
    router.replace("/secured");
  };

  return (
    <Box maxWidth={360} mx="auto" mt={12}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={2}>
          <TextField label="Username" {...register("username")} />
          <TextField
            label="Password"
            type="password"
            {...register("password")}
          />
          <TextField
            select
            label="User Type"
            {...register("userType")}
            SelectProps={{ native: true }}
          >
            <option value="Staff">Staff</option>
            <option value="Student">Student</option>
          </TextField>

          <Button type="submit">Login</Button>
        </Stack>
      </form>
    </Box>
  );
}
