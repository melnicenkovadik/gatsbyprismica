/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import styled from "styled-components";
import "./layout.css"
import {graphql, Link, StaticQuery} from "gatsby";

const MainWrapper = styled.main`
  margin: 0 auto;
`
const Header = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  background: #000000;
  height: 66px;
  padding: 0 16px;
  box-sizing: border-box;
`
const NavLink = styled.div`
  margin: auto 0;
  font-weight: bold;
  font-size: 16px;

  a {
    color: white;
    padding: 0 16px;

    text-decoration: none;

    &:hover {
      color: orange;
    }
  }
`
const NavLinks = styled.div`
  display: flex;
  margin-left: auto;
`
const Branding = styled.div`
  a {
    margin: auto 0;
    font-weight: bold;
    font-size: 24px;
    color: orange;
    padding: 0 16px;

    text-decoration: none;
  }
`
const navigationQuery = graphql`
    {
        prismic {
            allNavigations {
                edges {
                    node {
                        branding
                        navigation_links {
                            label
                            link {
                                ... on PRISMIC_Page {
                                    _meta {
                                        uid
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`

const Layout = ({children}, props) => {
    return (

        <>
            <Header>
                <StaticQuery
                    query={`${navigationQuery}`}
                    render={(data) => {
                        return (
                            <>
                                <Branding>
                                    <Link to={'/'}>
                                        {data.prismic.allNavigations.edges[0].node.branding}
                                    </Link>
                                </Branding>
                                <NavLinks>
                                    {data.prismic.allNavigations.edges[0].node.navigation_links.map((link) => {
                                        return (
                                            <NavLink key={link.link._meta.uid}>
                                                <Link to={`/${link.link._meta.uid}`}>
                                                    {link.label}
                                                </Link>
                                            </NavLink>
                                        )
                                    })}
                                </NavLinks>
                            </>
                        )
                    }}
                />
            </Header>

            <MainWrapper>{children}</MainWrapper>
        </>
    )
}

Layout.propTypes =
    {
        children: PropTypes.node.isRequired,
    }

export default Layout
