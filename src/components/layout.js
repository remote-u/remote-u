/** @jsx jsx */
import { jsx } from "theme-ui"
import {
  Layout,
  Header,
  Logo,
  ColorToggle,
  ContentWrapper,
  HeaderWidgets,
  Main,
} from "gatsby-theme-elements"

export default ({ children }) => {
  return (
    <Layout>
      <Header justify="space-between" sx={{ p: 4 }}>
        <Logo height="35px" />
        <HeaderWidgets>
          <ColorToggle />
        </HeaderWidgets>
      </Header>
      <ContentWrapper sx={{ py: [2, 5] }}>
        <Main>{children}</Main>
      </ContentWrapper>
      <Footer>Copyright Remote U</Footer>
    </Layout>
  )
}
