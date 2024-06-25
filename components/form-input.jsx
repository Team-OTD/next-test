export default function FormInput({name,type, placeholder, require, errors}) {
    return (
        <div className="flex flex-col gap-2">
            <input
                name={name}
                className="bg-transparent transition rounded-md w-full h-10 focus:outline-none ring-2 focus:ring-4 ring-neutral-200 focus:ring-orange-500 px-2 border-none placeholder:text-neutral-400"
                type={type}
                placeholder={placeholder}
                required={require}
              />
              {errors.map((error, index) => (
                <span key={index}
                className="text-red-500 font-medium">{error}</span>
              ))}
              
        </div>
    )
}