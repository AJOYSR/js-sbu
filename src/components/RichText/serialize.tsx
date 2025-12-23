import { BannerBlock } from '@/blocks/Banner/Component'
import { CallToActionBlock } from '@/blocks/CallToAction/Component'
import { CodeBlock, CodeBlockProps } from '@/blocks/Code/Component'
import { MediaBlock } from '@/blocks/MediaBlock/Component'
import React, { Fragment, JSX } from 'react'
import { CMSLink } from '@/components/Link'
import { DefaultNodeTypes, SerializedBlockNode } from '@payloadcms/richtext-lexical'
import type { BannerBlock as BannerBlockProps } from '@/payload-types'

import {
  IS_BOLD,
  IS_CODE,
  IS_ITALIC,
  IS_STRIKETHROUGH,
  IS_SUBSCRIPT,
  IS_SUPERSCRIPT,
  IS_UNDERLINE,
} from './nodeFormat'
import type {
  CallToActionBlock as CTABlockProps,
  MediaBlock as MediaBlockProps,
} from '@/payload-types'

export type NodeTypes =
  | DefaultNodeTypes
  | SerializedBlockNode<CTABlockProps | MediaBlockProps | BannerBlockProps | CodeBlockProps>

type Props = {
  nodes: NodeTypes[]
}

// Helper function to check for invalid nested elements
const containsInvalidNesting = (children: React.ReactNode, tagNames: string[]): boolean => {
  return React.Children.toArray(children).some((child) => {
    // Check direct children
    if (React.isValidElement(child)) {
      // Check the element type if it's a string (standard HTML element)
      if (typeof child.type === 'string' && tagNames.includes(child.type)) {
        return true
      }

      // Recursively check the children
      if (child.props) {
        const childProps = child.props as Record<string, unknown>
        if ('children' in childProps && childProps.children) {
          return containsInvalidNesting(childProps.children as React.ReactNode, tagNames)
        }
      }
    }
    return false
  })
}

export function serializeLexical({ nodes }: Props): JSX.Element {
  return (
    <Fragment>
      {nodes?.map((node, index): JSX.Element | null => {
        if (node == null) {
          return null
        }

        if (node.type === 'text') {
          let text = <React.Fragment key={index}>{node.text}</React.Fragment>
          if (node.format & IS_BOLD) {
            text = <strong key={index}>{text}</strong>
          }
          if (node.format & IS_ITALIC) {
            text = <em key={index}>{text}</em>
          }
          if (node.format & IS_STRIKETHROUGH) {
            text = (
              <span key={index} style={{ textDecoration: 'line-through' }}>
                {text}
              </span>
            )
          }
          if (node.format & IS_UNDERLINE) {
            text = (
              <span key={index} style={{ textDecoration: 'underline' }}>
                {text}
              </span>
            )
          }
          if (node.format & IS_CODE) {
            text = <code key={index}>{node.text}</code>
          }
          if (node.format & IS_SUBSCRIPT) {
            text = <sub key={index}>{text}</sub>
          }
          if (node.format & IS_SUPERSCRIPT) {
            text = <sup key={index}>{text}</sup>
          }

          return text
        }

        // NOTE: Hacky fix for
        // https://github.com/facebook/lexical/blob/d10c4e6e55261b2fdd7d1845aed46151d0f06a8c/packages/lexical-list/src/LexicalListItemNode.ts#L133
        // which does not return checked: false (only true - i.e. there is no prop for false)
        const serializedChildrenFn = (node: NodeTypes): JSX.Element | null => {
          if (!('children' in node) || node.children == null) {
            return null
          }

          if (node?.type === 'list' && node?.listType === 'check') {
            for (const item of node.children) {
              if ('checked' in item && !item?.checked) {
                item.checked = false
              }
            }
          }

          return serializeLexical({ nodes: node.children as NodeTypes[] })
        }

        const serializedChildren = 'children' in node ? serializedChildrenFn(node) : null

        if (node.type === 'block') {
          const block = node.fields

          const blockType = block?.blockType

          if (!block || !blockType) {
            return null
          }

          switch (blockType) {
            case 'cta':
              return <CallToActionBlock key={index} {...block} />
            case 'mediaBlock':
              return (
                <MediaBlock
                  className="col-start-1 col-span-3"
                  imgClassName="m-0"
                  key={index}
                  {...block}
                  captionClassName="mx-auto max-w-[48rem]"
                  enableGutter={false}
                  disableInnerContainer={true}
                />
              )
            case 'banner':
              return <BannerBlock className="col-start-2 mb-4" key={index} {...block} />
            case 'code':
              return <CodeBlock className="col-start-2" key={index} {...block} />
            default:
              return null
          }
        } else {
          switch (node.type) {
            case 'linebreak': {
              return <br className="col-start-2" key={index} />
            }
            case 'paragraph': {
              // Check if paragraph contains invalid nested elements (p, h1-h6)
              // This prevents HTML validation errors
              const hasInvalidNesting = containsInvalidNesting(serializedChildren, [
                'p',
                'h1',
                'h2',
                'h3',
                'h4',
                'h5',
                'h6',
              ])

              // If there are invalid nestings, render as div instead of p
              if (hasInvalidNesting) {
                return (
                  <div className="col-start-2 my-4" key={index}>
                    {serializedChildren}
                  </div>
                )
              }

              return (
                <p className="col-start-2" key={index}>
                  {serializedChildren}
                </p>
              )
            }
            case 'heading': {
              const Tag = node?.tag
              return (
                <Tag className="col-start-2" key={index}>
                  {serializedChildren}
                </Tag>
              )
            }
            case 'list': {
              const Tag = node?.tag
              return (
                <Tag className="list col-start-2" key={index}>
                  {serializedChildren}
                </Tag>
              )
            }
            case 'listitem': {
              if (node?.checked != null) {
                return (
                  <li
                    aria-checked={node.checked ? 'true' : 'false'}
                    className={` ${node.checked ? '' : ''}`}
                    key={index}
                    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-to-interactive-role
                    role="checkbox"
                    tabIndex={-1}
                    value={node?.value}
                  >
                    {serializedChildren}
                  </li>
                )
              } else {
                return (
                  <li key={index} value={node?.value}>
                    {serializedChildren}
                  </li>
                )
              }
            }
            case 'quote': {
              return (
                <blockquote className="col-start-2" key={index}>
                  {serializedChildren}
                </blockquote>
              )
            }
            case 'link': {
              const fields = node.fields

              // Get a direct representation of the children to check
              const childrenArray = React.Children.toArray(serializedChildren)

              // Check if the link contains any elements that shouldn't be in a paragraph
              const hasInvalidNesting = containsInvalidNesting(serializedChildren, [
                'p',
                'h1',
                'h2',
                'h3',
                'h4',
                'h5',
                'h6',
              ])

              // Handle different contexts for link rendering
              if (hasInvalidNesting) {
                // Special case for links with headings inside - render with a wrapper div
                return (
                  <div className="col-start-2" key={index}>
                    <CMSLink
                      newTab={Boolean(fields?.newTab)}
                      reference={fields.doc as any}
                      type={fields.linkType === 'internal' ? 'reference' : 'custom'}
                      url={fields.url}
                      className="block"
                    >
                      {serializedChildren}
                    </CMSLink>
                  </div>
                )
              }

              // Standard link with no invalid nesting
              return (
                <CMSLink
                  key={index}
                  newTab={Boolean(fields?.newTab)}
                  reference={fields.doc as any}
                  type={fields.linkType === 'internal' ? 'reference' : 'custom'}
                  url={fields.url}
                >
                  {serializedChildren}
                </CMSLink>
              )
            }

            default:
              return null
          }
        }
      })}
    </Fragment>
  )
}
