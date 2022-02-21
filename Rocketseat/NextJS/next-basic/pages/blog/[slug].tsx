import { GetStaticPaths, GetStaticProps } from "next/types"

export default function BlogPost({ date }) {

  return <h1>Hello ! - {date}</h1>
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {

      date: new Date().toISOString(),
    },
    revalidate: 5
  }
}
