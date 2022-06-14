import { Typography } from "@mui/material";
import { Container } from "@mui/system";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";
import useSWR from "swr";
import { SingleNews } from "../../utils/types/news";

const getSingleNews = (url: string) =>
  axios.get<SingleNews>(url).then((res) => res.data);

export default function User() {
  const router = useRouter();
  const { newsId } = router.query;

  const { data, error } = useSWR(
    newsId != null ? `/api/news?id=${newsId}` : null,
    getSingleNews
  );

  if (error) return <div>Failed to load news</div>;
  if (!data) return <div>Loading...</div>;

  const { author, img, text, title } = data;

  return (
    <Container sx={{ paddingBlock: "2rem" }}>
      <Typography margin="1rem 0" component="h1" variant="h3">
        {title}
      </Typography>
      <Image
        style={{ borderRadius: "10px" }}
        src={img}
        alt={title}
        height={2000}
        width={5000}
        layout="intrinsic"
      />
      <Typography component="p" variant="caption">
        {text}
      </Typography>
      <Typography margin="2rem 0" component="p" variant="h5">
        Author: {author}
      </Typography>
    </Container>
  );
}
