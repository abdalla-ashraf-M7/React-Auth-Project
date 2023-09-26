export default function Error(props) {
  return (
    <div
      style={{
        fontSize: "12px",
        color: "red",
        marginTop: "0",
        alignSelf: "flex-start",
      }}
    >
      {props.message}
    </div>
  );
}
