import { Link, useParams } from "react-router-dom";

import NavHeader from "../../ui/NavBar";
import Footer from "../../ui/Footer";

import { articles } from "./blogData";
import "./blog.css";


export default function ArticleDisplay() {
  const { slug } = useParams();

  const article = articles.find((item) => item.slug === slug);

  if (!article) {
    return (
      <main className="blog-page">
        <div className="blog-container">
          <NavHeader logo="WAG!" />

          <section className="article-detail-section">
            <h1>Article not found</h1>
            <Link to="/blog">Go back to blog</Link>
          </section>


        </div>
      </main>
    );
  }

  const recommendedArticles = articles
    .filter(
      (item) => item.species === article.species && item.slug !== article.slug,
    )
    .slice(0, 2);

  return (
    <main className="blog-page">
      <div className="blog-container">
        <NavHeader logo="WAG!" />

        <section className="article-detail-section">
          <div className="article-hero">
            <img src={article.image} alt={article.title} />

            <div>
              <h1>{article.title}</h1>
              <p className="article-author">Source: WAG team</p>
              <div className="article-rating">★ ★ ★ ★ ☆</div>
            </div>
          </div>

          <div className="article-content">
            {article.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <h2 className="recommended-title">Recommended</h2>

          <div className="recommended-list">
            {recommendedArticles.map((item) => (
              <Link
                to={`/article/${item.slug}`}
                className="recommended-card"
                key={item.slug}
              >
                <img src={item.image} alt={item.title} />

                <div>
                  <h3>{item.title}</h3>
                  <button type="button">Go there!</button>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <Footer
          logo="WAG!"
          socialMedia={["Instagram", "Facebook"]}
        />
      </div>
    </main>
  );
}
