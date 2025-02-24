

const CardSecondary = ({header, footer, children, style}) => {
  return (
    <div className={`flex flex-col gap-5 p-6 min-w-[300px] rounded-xl overflow-hidden bg-white border border-light-2 ${style}`}>
        <div><h2 className='text-[18px] font-semibold'>{header}</h2></div>
        <div>{children}</div>
        <div><p className='text-[12px]'>{footer}</p></div>        
    </div>
  )
}

export default CardSecondary