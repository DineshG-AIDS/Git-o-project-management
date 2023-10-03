import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
} from "@material-tailwind/react";

function BackgroundBlogCard({ backgroundImage, title, author, authorImage }) {
  return (
    <Card
      shadow={false}
      className="relative grid h-[33rem] w-full max-w-[26rem] items-end justify-center overflow-hidden text-center rounded-3xl cursor-default"
    >
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="absolute inset-0 m-0 h-full w-full bg-[url] bg-cover bg-center rounded-3xl"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50 rounded-3xl" />
      </CardHeader>
      <CardBody className="relative py-14 px-6 md:px-12">
        <Typography
          variant="h2"
          color="white"
          className="mb-6 font-medium leading-[1.5]"
        >
          {title}
        </Typography>
        <Typography variant="h5" className="mb-4 text-gray-400">
          {author}
        </Typography>
        <Avatar
          size="xl"
          variant="circular"
          alt={author}
          className="border-2 border-white"
          src={authorImage}
        />
      </CardBody>
    </Card>
  );
}

export default BackgroundBlogCard;
