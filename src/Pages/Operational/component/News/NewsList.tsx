import {
  Card,
  Text,
  VStack,
  Heading,
  HStack,
  Table,
  Thead,
  Tr,
  Td,
} from "@chakra-ui/react";
import { MdBookmarks } from "react-icons/md";
import { useEffect, useState } from "react";
import { DataStore } from "aws-amplify";
import { News } from "../../../../models";
import moment from "moment";
import useCompany from "../../../Settings/hooks/Company/useCompany";

const NewsList = () => {
  // get News
  const [newsList, setNewsList] = useState<News[]>([]);
  const { data: company } = useCompany();
  useEffect(() => {
    const fetchData = async () => {
      if (!company?.id) {
        console.log("Company ID is missing or invalid.");
        return;
      }

      const fetchedNews = await DataStore.query(News, (c) =>
        c.compId.eq(company?.id)
      );
      const sortedNews = fetchedNews.sort((a, b) =>
        moment(b.createdAt).diff(a.createdAt)
      );
      setNewsList(sortedNews);
    };

    fetchData();
  }, [company?.id]);

  return (
    <VStack
      w={"full"}
      align={"start"}
      alignItems={"start"}
      alignContent={"start"}
      justify={"space-between"}
    >
      <Heading color={"gray.500"} size={"lg"}>
        News
      </Heading>

      <Card
        overflow={"scroll"}
        overflowX={"hidden"}
        h={300}
        w={"700px"}
        p={0}
        borderRadius={""}
        variant={"outline"}
      >
        <Table w={"full"} variant="striped">
          <Thead rounded={"xl"}>
            {newsList.map((news) => (
              <Tr key={news.id}>
                <Td flexWrap={"wrap"}>
                  <HStack>
                    <Text fontSize={"4xl"}>
                      <MdBookmarks style={{ color: "#416D77" }} />
                    </Text>
                    <VStack alignItems={"flex-start"}>
                      <Text>{news.text}</Text>

                      <Text fontSize={"xs"} color={"gray.500"}>
                        {moment(news.createdAt).format("DD/MM/YYYY HH:mm")}
                      </Text>
                    </VStack>
                  </HStack>
                </Td>
              </Tr>
            ))}
          </Thead>
        </Table>
      </Card>
    </VStack>
  );
};

export default NewsList;
