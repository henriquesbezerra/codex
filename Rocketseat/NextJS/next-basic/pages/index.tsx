import { GetServerSideProps, GetStaticProps } from "next/types";

export default function Home({ repositories, date }) {

  return (
    <>
      <h1>Hello World!</h1>
      <h3>{date}</h3>
      <ul>
        {repositories.map(item => (<li key={item}>{item}</li>))}
      </ul>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch('http://api.github.com/users/henriquesbezerra/repos');
  const data = await response.json();
  const reposNames = data.map(item => item.name);
  return {
    props: {
      repositories: reposNames,
      date: new Date().toISOString(),
    },
    revalidate: 60 * 60 * 4
  }
}
