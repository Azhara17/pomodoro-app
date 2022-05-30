import "./Btn.css";

function SaveBtn(props) {
  return (
    <button className="timer__btn" {...props} type="submit">
      Save
    </button>
  );
}

export default SaveBtn;
