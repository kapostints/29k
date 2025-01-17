import React from 'react';
import ScreenWrapper from '../../../lib/uiLib/decorators/ScreenWrapper';
import {H1, H2, H3, H4, H5} from './Heading/Heading';
import {B1, B2, B3, TextLink} from './Text/Text';
import Input from './TextInput/TextInput';
import MarkdownRenderer from './Markdown/Markdown';
import {Spacer16, Spacer8} from '../Spacers/Spacer';
import {
  HKGroteskBold,
  HKGroteskRegular,
  OrpheusProBold,
  OrpheusProItalic,
} from '../../constants/fonts';

export const AllTypes = () => (
  <ScreenWrapper>
    <Spacer16 />
    <H1>Heading 1</H1>
    <H2>Heading 2</H2>
    <H3>Heading 3</H3>
    <H4>Heading 4</H4>
    <H5>Heading 5</H5>
    <B1>Body 1</B1>
    <B2>Body 2</B2>
    <B3>Body 3</B3>
    <Spacer16 />
    <TextLink onPress={() => {}}>Text link</TextLink>
    <Spacer8 />
    <Input placeholder="Placeholder" />
  </ScreenWrapper>
);
export const Headings = () => (
  <ScreenWrapper>
    <Spacer16 />
    <B3>Default: OrpheusProMedium</B3>
    <H1>Heading 1</H1>
    <H2>Heading 2</H2>
    <H3>Heading 3</H3>
    <H5>Heading 5</H5>
    <Spacer16 />
    <B3>Default: OrpheusProBold</B3>
    <H1 style={{fontFamily: OrpheusProBold}}>Heading 1</H1>
    <H2 style={{fontFamily: OrpheusProBold}}>Heading 2</H2>
    <H3 style={{fontFamily: OrpheusProBold}}>Heading 3</H3>
    <H4 style={{fontFamily: OrpheusProBold}}>Heading 4</H4>
    <H5 style={{fontFamily: OrpheusProBold}}>Heading 5</H5>
    <Spacer16 />
    <B3>Default: OrpheusProItalic</B3>
    <H1 style={{fontFamily: OrpheusProItalic}}>Heading 1</H1>
    <H2 style={{fontFamily: OrpheusProItalic}}>Heading 2</H2>
    <H3 style={{fontFamily: OrpheusProItalic}}>Heading 3</H3>
    <H4 style={{fontFamily: OrpheusProItalic}}>Heading 4</H4>
    <H5 style={{fontFamily: OrpheusProItalic}}>Heading 5</H5>
  </ScreenWrapper>
);
export const Bodies = () => (
  <ScreenWrapper>
    <Spacer16 />
    <B3>Default: HKGroteskMedium</B3>
    <B1>Body 1</B1>
    <B2>Body 2</B2>
    <B3>Body 3</B3>
    <Spacer16 />
    <B3>HKGroteskBold</B3>
    <B1 style={{fontFamily: HKGroteskBold}}>Body 1</B1>
    <B2 style={{fontFamily: HKGroteskBold}}>Body 2</B2>
    <B3 style={{fontFamily: HKGroteskBold}}>Body 3</B3>
    <Spacer16 />
    <B3>HKGroteskRegular</B3>
    <B1 style={{fontFamily: HKGroteskRegular}}>Body 1</B1>
    <B2 style={{fontFamily: HKGroteskRegular}}>Body 2</B2>
    <B3 style={{fontFamily: HKGroteskRegular}}>Body 3</B3>
  </ScreenWrapper>
);

export const Markdown = () => (
  <ScreenWrapper>
    <Spacer16 />
    <MarkdownRenderer>
      {`
# Heading1
## Heading2
### Heading3
#### Heading4
##### Heading5

Paragraph text **bold** *italic* ~~highlighted~~ http://29k.org

![An image](https://static.tildacdn.com/tild3631-3833-4238-a237-613330346266/white_circle_black.png)

----

* Unordered list item 1
* Unordered list item 2
* Unordered list with a lot of text that should line break.........

1. Ordered list item 1
2. Ordered list item 2
3. Ordered list with a lot of text that should line break.........

>BlockQuote example`}
    </MarkdownRenderer>
  </ScreenWrapper>
);
