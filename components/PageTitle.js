export default function PageTitle({ children }) {
  return (
    <h1 className="pt-6 text-3xl leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-4xl md:leading-14">
      {children}
    </h1>
  )
}
