


const ButtonPrimary = ({onclick, text="Button", bg="bg-primary-500"}) => {
  // const navigate = useNavigate();
  return (
       <button className={` text-white px-5 py-3 rounded-full ${bg}`}
         onClick={onclick}
       >
        {text}
        </button>
  )
}

export default ButtonPrimary