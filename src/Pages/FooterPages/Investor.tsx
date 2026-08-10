import { useEffect, useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import FileIcon from "../../assets/fileIcon.png";
import { commonApi } from "../../../services";
import { categories } from "../../Common/data";
import Header from "../../components/Header/header";

// import DescriptionIcon from "@mui/icons-material/Description";

const InvestorInformationPage = () => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [documents, setDocuments] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log(loading);

    if (!selectedCategory?.categoryName) return;

    const fetchDocuments = async () => {
      try {
        setLoading(true);

        const credentials = btoa("admin:admin");

        const response = await fetch(
          "https://api.lkpconnect.net.in/api/WebAdmin/GetInvestorInformationData",
          {
            method: "POST",
            headers: {
              Authorization: `Basic ${credentials}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              section: "Inevstors",
              option: selectedCategory.categoryName,
              pageNumber: 1,
              pageSize: 20,
            }),
          },
        );

        const result = await response.json();

        if (result?.isSuccess) {
          setDocuments(result?.data?.investorInfoResponseRecord || []);
        } else {
          setDocuments([]);
        }
      } catch (error) {
        console.error("Investor Information API Error:", error);
        setDocuments([]);
      } finally {
        setLoading(false);
      }
    };

    fetchDocuments();
  }, [selectedCategory]);

  const handleDownload = async (filePath: string) => {
    // console.log(fileName);

    const blob = await commonApi(
      "WebAdmin/DownloadWebadminFile",
      {
        FileName: filePath,
        folderName: "Investor",
      },
      "blob",
    );

    const url = window.URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    const originalName: any = filePath.split("\\").pop();
    a.download = originalName;

    document.body.appendChild(a);
    a.click();

    a.remove();
    window.URL.revokeObjectURL(url);
  };

  return (
    <>
      <Header />
      <Box
        sx={{
          maxWidth: "1400px", // instead of 85%
          width: "100%",
          mx: "auto",
          px: {
            xs: 2,
            sm: 3,
            md: 4,
          },
          pt: "20px",
        }}
      >
        <Typography
          sx={{
            fontSize: {
              xs: "32px",
              sm: "38px",
              md: "42px",
              lg: "45px",
            },
            fontWeight: 700,
            mb: 4,
            paddingTop: "100px",
          }}
        >
          Investor Information
        </Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "280px minmax(0,1fr)",
              lg: "320px minmax(0,1fr)",
              xl: "380px minmax(0,1fr)",
            },
            gap: {
              xs: 2,
              md: 3,
            },
            alignItems: "start",
          }}
        >
          <Box
            sx={{
              display: {
                xs: "block",
                md: "none",
              },
            }}
          >
            <select
              value={selectedCategory?.categoryId ?? ""}
              onChange={(e) => {
                const item = categories.find(
                  (x) => x.categoryId === Number(e.target.value),
                );

                if (item) setSelectedCategory(item);
              }}
              style={{
                width: "100%",
                height: "48px",
                borderRadius: "12px",
                border: "1px solid #BDBDBD",
                padding: "0 14px",
                fontSize: "15px",
                outline: "none",
                background: "#fff",
              }}
            >
              {categories.map((item) => (
                <option key={item.categoryId} value={item.categoryId}>
                  {item.categoryName}
                </option>
              ))}
            </select>
          </Box>
          {/* LEFT MENU */}

          <Box
            sx={{
              display: {
                xs: "none",
                md: "block",
              },

              border: "1px solid #E5E7EB",
              borderRadius: "20px",
              p: 2,
              pr: 1, // add right padding
              backgroundColor: "#FAFAFA",
              width: "100%",
              position: "sticky",
              top: 20,
              maxHeight: "400px",
              overflowY: "auto",

              scrollbarGutter: "stable", // reserve scrollbar space

              "&::-webkit-scrollbar": {
                width: "6px",
              },

              "&::-webkit-scrollbar-thumb": {
                background: "#CFCFCF",
                borderRadius: "10px",
              },

              "&::-webkit-scrollbar-track": {
                background: "transparent",
                marginTop: "10px",
                marginBottom: "10px",
              },
            }}
          >
            {categories.map((item) => (
              <Box
                key={item.categoryId}
                onClick={() => setSelectedCategory(item)}
                sx={{
                  py: 1.8,
                  px: 2,
                  cursor: "pointer",

                  borderBottom: "1px solid #D6D6D6",

                  borderLeft:
                    selectedCategory?.categoryId === item.categoryId
                      ? "4px solid #095192"
                      : "4px solid transparent",

                  color:
                    selectedCategory?.categoryId === item.categoryId
                      ? "#095192"
                      : "#000",

                  fontWeight:
                    selectedCategory?.categoryId === item.categoryId
                      ? 700
                      : 400,

                  transition: "all 0.2s ease",

                  "&:hover": {
                    bgcolor: "#F7FBFE",
                  },
                }}
              >
                <Typography
                  sx={{
                    fontSize: "15px",
                    lineHeight: "125%",
                    fontWeight: "inherit",
                  }}
                >
                  {item.categoryName}
                </Typography>
              </Box>
            ))}
          </Box>

          {/* RIGHT CONTENT */}

          <Box
            key={selectedCategory?.categoryId || "default"}
            sx={{
              border: "1px solid #E5E7EB",
              borderRadius: "20px",

              p: {
                xs: 1,
                md: 2,
              },

              maxHeight: {
                xs: "unset",
                md: "650px",
              },

              overflowY: {
                xs: "visible",
                md: documents.length > 10 ? "auto" : "visible",
              },

              minWidth: 0,

              "&::-webkit-scrollbar": {
                width: "8px",
              },

              "&::-webkit-scrollbar-thumb": {
                background: "#CFCFCF",
                borderRadius: "10px",
              },
            }}
          >
            {documents.map((doc, index) => (
              <Box
                key={`${doc.titleName}-${index}`}
                sx={{
                  mb: 1.5,
                  background: {
                    xs: "#FFFFFF",
                    md: "transparent",
                  },
                  borderRadius: "14px",
                }}
              >
                {/* MOBILE */}

                <Box
                  sx={{
                    display: {
                      xs: "flex",
                      md: "none",
                    },

                    alignItems: "center",

                    justifyContent: "space-between",

                    background: "#F4F4F4",

                    borderRadius: "10px",

                    px: 2,

                    py: 1.5,
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: 500,
                      color: "#000",
                      flex: 1,
                      pr: 2,
                    }}
                  >
                    {doc.titleName}
                  </Typography>

                  <Box
                    onClick={() => handleDownload(doc.downloadUrl)}
                    sx={{
                      width: 36,
                      height: 36,
                      borderRadius: "8px",

                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",

                      cursor: "pointer",
                    }}
                  >
                    <Box
                      component="img"
                      src={FileIcon}
                      sx={{
                        width: 18,
                        height: 18,
                      }}
                    />
                  </Box>
                </Box>

                {/* DESKTOP */}

                <Box
                  sx={{
                    display: {
                      xs: "none",
                      md: "grid",
                    },

                    gridTemplateColumns: {
                      md: "1fr 220px",
                      lg: "1fr 260px",
                    },

                    gap: 1,
                  }}
                >
                  <Box
                    sx={{
                      background: "#F4F4F4",
                      borderRadius: "14px",
                      p: "1px 15px",
                      display: "flex",
                      alignItems: "center",
                      fontSize: {
                        md: "15px",
                        lg: "18px",
                      },
                    }}
                  >
                    {doc.titleName}
                  </Box>

                  <Button
                    sx={{
                      background: "#F4F4F4",
                      borderRadius: "14px",
                      color: "#000",
                      textTransform: "none",
                      fontSize: {
                        md: "15px",
                        lg: "18px",
                      },
                      gap: 1,

                      "&:hover": {
                        background: "#EDEDED",
                      },
                    }}
                    onClick={() => handleDownload(doc.downloadUrl)}
                  >
                    <Box
                      component="img"
                      src={FileIcon}
                      sx={{
                        width: 22,
                        height: 22,
                      }}
                    />
                    View File
                  </Button>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default InvestorInformationPage;
