import Form from "./components/forms/Form";

export default function NewUser() {
  return (
    <div>
      <div className="content">
        <div className="parent">
          <Form
            btnText="Create"
            submitLink={`http://127.0.0.1:8000/api/user/create`}
            pathAfterSuccess="/dashboard/users"
          />
        </div>
      </div>
    </div>
  );
}
