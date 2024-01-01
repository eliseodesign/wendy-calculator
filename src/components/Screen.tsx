
interface ScreenProps {
  libras: number
  total: number
}
export const Screen = ({libras, total}: ScreenProps) => {
  return (
    <section className="flex flex-col px-2">
      <article className="text-6xl justify-center font-semibold flex items-center">
        {libras}
      </article>
      <article className="flex w-full justify-center items-center">
        <img className="max-w-24 mx-auto" src="/public/arrows.svg" alt="arows" />
      </article>

      <article className=" text-6xl font-semibold flex items-center justify-center">
        {total}
      </article>
    </section>
  )
}
