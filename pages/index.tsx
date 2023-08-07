import { GetServerSideProps } from "next";

type Props = {
  name: string;
};

export default function HomePage({ name }: Props) {
  return <div>Hello {name}</div>;
}

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  return { props: { name: "NextJS" } };
};
