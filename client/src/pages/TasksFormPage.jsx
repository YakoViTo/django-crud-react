import { useForm } from "react-hook-form";
import { createTask } from "../api/tasks.api";
import { useNavigate } from 'react-router-dom';

export function TasksFormPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = handleSubmit(async data => {
    await createTask(data);
    navigate("/tasks");
  });

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="title"
          {...register("title", { required: true })}
        />
        {errors.title && <span>title is required</span>}

        <textarea
          rows="3"
          placeholder="Description"
          {...register("description", { required: true })}
        ></textarea>
        {errors.description && <span>desciption is required</span>}

        <button>save</button>
      </form>
    </div>
  );
}