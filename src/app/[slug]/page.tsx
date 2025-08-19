"use client";

import { Section, Block, Link } from "@/devlink/_Builtin";

interface PageProps {
  params: {
    slug: string;
  };
}

export default function DynamicPage({ params }: PageProps) {
  const { slug } = params;

  return (
    <Section
      tag="section"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Block tag="div" className="container">
        <Block
          tag="div"
          className="dynamic-content"
          style={{
            textAlign: "center",
            maxWidth: "800px",
            margin: "0 auto",
          }}
        >
          <h1
            className="margin-bottom-24px"
            style={{
              fontSize: "2.5rem",
              fontWeight: 700,
              background: "linear-gradient(83.21deg, #3245ff 0%, #bc52ee 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Dynamic Page: {slug}
          </h1>
          
          <Block tag="p" className="margin-bottom-24px">
            This is a dynamic page that can handle any route like:
            <br />
            <code style={{ 
              background: "#f5f5f5", 
              padding: "4px 8px", 
              borderRadius: "4px",
              fontSize: "0.9rem"
            }}>
              website.com/{slug}
            </code>
          </Block>

          <Block tag="p" className="margin-bottom-24px">
            Perfect for CMS collections, blog posts, product pages, or any dynamic content!
          </Block>

          <div style={{ marginTop: "24px" }}>
            <Link
              button={true}
              options={{
                href: "/",
              }}
              className="button-primary"
              style={{
                borderRadius: "4px",
                background: "#146ef5",
                color: "#ffffff",
                boxShadow:
                  "0px 0.5px 1px rgba(0, 0, 0, 0.25), inset 0px 29px 23px -16px rgba(255, 255, 255, 0.04), inset 0px 0.5px 0.5px rgba(255, 255, 255, 0.2)",
                marginRight: "12px",
              }}
            >
              Back to Home
            </Link>
            
            <Link
              button={true}
              options={{
                href: "/example-item",
              }}
              className="button-secondary"
              style={{
                borderRadius: "4px",
                background: "transparent",
                color: "#146ef5",
                border: "2px solid #146ef5",
                padding: "8px 16px",
              }}
            >
              Test Another Route
            </Link>
          </div>
        </Block>
      </Block>
    </Section>
  );
}
