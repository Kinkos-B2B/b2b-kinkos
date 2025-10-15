'use client'

import { type ReactNode, forwardRef } from 'react'

import { Box, Table, Text } from '@chakra-ui/react'

export interface ComparisonTableColumn {
  key: string
  title: string
  width?: string
  flex?: number
}

export interface ComparisonTableRow {
  [key: string]: ReactNode
}

export interface ComparisonTableProps {
  data: ComparisonTableRow[]
  variant?: 'default' | 'highlight'
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

const columns: ComparisonTableColumn[] = [
  {
    key: 'category',
    title: '구분',
    width: '215px',
    flex: 215,
  },
  {
    key: 'kinkos',
    title: '킨코스',
    width: '115px',
    flex: 115,
  },
  {
    key: 'competitorA',
    title: '경쟁사 A',
    width: '115px',
    flex: 115,
  },
  {
    key: 'competitorB',
    title: '경쟁사 B',
    width: '115px',
    flex: 115,
  },
]

export const ComparisonTable = forwardRef<HTMLDivElement, ComparisonTableProps>(
  ({ data, size = 'md', className }, ref) => {
    return (
      <Box ref={ref} className={className} w={'100%'}>
        <Table.Root size={size} variant="outline" showColumnBorder>
          <Table.Header>
            <Table.Row>
              {columns.map((column, index) => (
                <Table.ColumnHeader
                  key={column.key}
                  minWidth={column.width}
                  flex={column.flex}
                  textStyle={'pre-body-3'}
                  color={'grey.0'}
                  bg={'grey.7'}
                  textAlign="center"
                  py="10px"
                  px="10px"
                  borderTopStartRadius={index === 0 ? '8px' : '0'}
                  borderTopEndRadius={
                    index === columns.length - 1 ? '8px' : '0'
                  }
                >
                  {column.title}
                </Table.ColumnHeader>
              ))}
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {data.map((row, rowIndex) => (
              <Table.Row key={rowIndex} color={'primary.2'}>
                {columns.map((column, colIndex) => (
                  <Table.Cell
                    key={column.key}
                    minWidth={column.width}
                    flex={column.flex}
                    bg={
                      colIndex === 0 || colIndex === 1 ?
                        'grey.0'
                      : 'whitetrnsparent.5'
                    }
                    textAlign="center"
                    py="15px"
                    px="20px"
                    color={'primary.2'}
                    borderBottomStartRadius={
                      rowIndex === data.length - 1 && colIndex === 0 ?
                        '8px'
                      : '0'
                    }
                    borderBottomEndRadius={
                      (
                        rowIndex === data.length - 1 &&
                        colIndex === columns.length - 1
                      ) ?
                        '8px'
                      : '0'
                    }
                  >
                    <Text
                      color={colIndex === 1 ? 'primary.4' : 'grey.10'}
                      textStyle={
                        colIndex === 0 || colIndex === 1 ?
                          'pre-body-3'
                        : 'pre-body-4'
                      }
                    >
                      {row[column.key]}
                    </Text>
                  </Table.Cell>
                ))}
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>
      </Box>
    )
  },
)

ComparisonTable.displayName = 'ComparisonTable'
