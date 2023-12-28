import React from "react";

function ReviewId({
  params,
}: {
  params: {
    productId: string;
    reviwId: string;
  };
}) {
  return (
    <div>
      Review Id for {params.productId} and review {params.reviwId}
    </div>
  );
}

export default ReviewId;
