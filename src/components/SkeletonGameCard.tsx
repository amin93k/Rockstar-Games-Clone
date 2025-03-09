import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";


export default function SkeletonGameCard() {
    const skeltonRepeatTime = [1, 2, 3, 4, 5, 6]

    return (
        <>
            {skeltonRepeatTime.map((_, index) =>
                <Card borderRadius={15} variant="outline" key={index}>
                    <Skeleton height="200px" />
                    <CardBody>
                        <SkeletonText mt='4' noOfLines={3} spacing='4' skeletonHeight='2' />
                    </CardBody>
                </Card>
            )}
        </>
    )
}

