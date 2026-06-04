import { LoadingCard, Card } from "@Elements/index";
import { type CardsContainerPropsTypes } from "@Types/index";

export default function CardsContainer(props: CardsContainerPropsTypes) {
  const { blogs, isLoading } = props;
  const loadingCardsIds = [1,2,3,4,5,6,7,8,9]
  return (
    <div className="mb-8 mt-12 flex flex-wrap justify-center gap-5">
      {isLoading && loadingCardsIds.map((cardId) => (
        <LoadingCard key={cardId}/>
      ))}
      {!isLoading && blogs &&
        blogs.map((blog) => (
          <Card
            key={blog.id}
            id={blog.id}
            cover={blog.cover}
            tags={blog.tag_list}
            title={blog.title}
            slug={blog.slug}
            avatar={blog.avatar}
            publisher={blog.publisher}
            createdAt={blog.created_at}
          />
        ))}
    </div>
  );
}
