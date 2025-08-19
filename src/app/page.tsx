"use client";

import { Section, Block, Link } from "@/devlink/_Builtin";

export default function Home() {
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
          className="hero-split"
          style={{
            textAlign: "center",
            maxWidth: "600px",
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
            Welcome to Webflow Cloud
          </h1>
          <Block tag="p" className="margin-bottom-24px">
            This is a simple test using Basic components with enhanced styling and dynamic routing.
          </Block>
          
          <div style={{ marginTop: "24px", marginBottom: "24px" }}>
            <Link
              button={true}
              options={{
                href: "https://developers.webflow.com/webflow-cloud/getting-started",
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
              Get Started
            </Link>
          </div>

          <Block tag="p" className="margin-bottom-16px" style={{ fontSize: "1.1rem", fontWeight: 600 }}>
            Test Dynamic Routing:
          </Block>
          
          <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link
              button={true}
              options={{
                href: "/simple-test",
              }}
              className="button-secondary"
              style={{
                borderRadius: "4px",
                background: "transparent",
                color: "#146ef5",
                border: "2px solid #146ef5",
                padding: "8px 16px",
                fontSize: "0.9rem",
              }}
            >
              /simple-test (Minimal)
            </Link>
            
            <Link
              button={true}
              options={{
                href: "/test",
              }}
              className="button-secondary"
              style={{
                borderRadius: "4px",
                background: "transparent",
                color: "#146ef5",
                border: "2px solid #146ef5",
                padding: "8px 16px",
                fontSize: "0.9rem",
              }}
            >
              /test (Simple Test)
            </Link>
            
            <Link
              button={true}
              options={{
                href: "/example-page",
              }}
              className="button-secondary"
              style={{
                borderRadius: "4px",
                background: "transparent",
                color: "#146ef5",
                border: "2px solid #146ef5",
                padding: "8px 16px",
                fontSize: "0.9rem",
              }}
            >
              /example-page
            </Link>
            
            <Link
              button={true}
              options={{
                href: "/collection/sample-item",
              }}
              className="button-secondary"
              style={{
                borderRadius: "4px",
                background: "transparent",
                color: "#146ef5",
                border: "2px solid #146ef5",
                padding: "8px 16px",
                fontSize: "0.9rem",
              }}
            >
              /collection/sample-item
            </Link>
            
            <Link
              button={true}
              options={{
                href: "/blog/hello-world",
              }}
              className="button-secondary"
              style={{
                borderRadius: "4px",
                background: "transparent",
                color: "#146ef5",
                border: "2px solid #146ef5",
                padding: "8px 16px",
                fontSize: "0.9rem",
              }}
            >
              /blog/hello-world
            </Link>
          </div>
        </Block>
      </Block>
    </Section>
  );
}
