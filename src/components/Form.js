const Form = ({ submitHandler, changeHandler, formData }) => {
  return (
    <form onSubmit={submitHandler}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          placeholder="name"
          value={formData.name}
          onChange={changeHandler}
        />
      </label>
      <label>
        Rol:
        <input
          type="text"
          name="rol"
          placeholder="rol girin"
          value={formData.rol}
          onChange={changeHandler}
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          name="email"
          placeholder="email"
          value={formData.email}
          onChange={changeHandler}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
